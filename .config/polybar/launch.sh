<#!/usr/bin/env bash>

# Terminate already running bar instances
killall -q polybar
# If all your bars have ipc enabled, you can also use 
# polybar-msg cmd quit

# Launch bar1 and bar2
exec polybar top -r -c ~/.config/config/polybar.conf

echo "Bars launched..."