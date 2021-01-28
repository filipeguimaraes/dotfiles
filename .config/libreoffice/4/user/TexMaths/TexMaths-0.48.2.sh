#!/bin/bash
#
# This script is part of the TexMaths package
# http://roland65.free.fr/texmaths
#
# Roland Baudin (roland65@free.fr)

# Function used to generate system log
SystemLog(){
syslog=${UserDir}System.log
uname -a > "$syslog"
echo "" >> "$syslog"
echo "osType=$osType" >> "$syslog"
echo "cpuType=$cpuType" >> "$syslog"
echo "" >> "$syslog"
echo "PATH=$PATH" >> "$syslog"
echo "" >> "$syslog"
}

# Definition of PATH and binary paths
cpu=$(uname -p)
mac=$(uname -m)
sys=$(uname -s)
[ "$cpu" = "powerpc" -o "$mac" = "ppc" ] && cpuType=ppc || cpuType=i386 
[ "$sys" = "Darwin" ] && osType=MacOSX || osType=Linux 
UserDir="/home/wtv/dotfiles/.config/libreoffice/4/user/TexMaths/"
PkgDir="/usr/lib/libreoffice/program/../share/extensions/texmaths/"

PATH="${PkgDir}bin/${osType}${cpuType}:$PATH"
PATH="/usr/bin/:$PATH"
export PATH


# Process the options
ext=$1
dpi=$2
Trans="$3"
tmpPath="$4"
filename=tmpfile
compiler=$5

# Generate system log
SystemLog

# Go to the tmp directory
if [ "$tmpPath" != "" ] 
then
   [ ! -d "$tmpPath" ]  && mkdir -p "$tmpPath"
   cd "$tmpPath"
fi

# Remove old files but not the tex file
rm ${filename}.{dvi,xdv,out,bsl,dat,log,aux,png,svg} &> /dev/null

# Compile using latex
if [ "${compiler}" = "latex" ]
then
"/usr/bin/latex" -shell-escape -interaction=nonstopmode ${filename}.tex  > ${filename}.out

# Conversion of the DVI file to a SVG image
if [ -f ${filename}.dvi ]
then
if [ "${ext}" = "svg" ]
then
   "/usr/bin/dvisvgm" -n1 -e ${filename}.dvi &> ${filename}.dat
fi
fi
# Conversion of the DVI file to a PNG image
if [ -f ${filename}.dvi ]
then
if [ "${ext}" = "png" ]
then
if [ "${Trans}" = "TRUE" ]
then
   "/usr/bin/dvipng" -q -T tight -bg Transparent --width --height --depth -D ${dpi} -o ${filename}.png ${filename}.dvi > ${filename}.dat
else
   "/usr/bin/dvipng" -q -T tight --width --height --depth -D ${dpi} -o ${filename}.png ${filename}.dvi > ${filename}.dat
fi
fi
fi

# Compile using xelatex
else
"/usr/bin/xelatex" -no-pdf -shell-escape -interaction=nonstopmode ${filename}.tex  > ${filename}.out
# Conversion of the XDV file to a SVG image
if [ -f ${filename}.xdv ]
then
"/usr/bin/dvisvgm" -n1 -e ${filename}.xdv &> ${filename}.dat
fi
fi

