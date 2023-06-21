#!/bin/bash
# Execute the command passed as an argument and terminate it after a certain duration

# Set the timeout duration (in seconds)
TIMEOUT_DURATION=50

# Start the command in the background
"$@" &

# Get the PID (process ID) of the command
CMD_PID=$!

# Wait for the specified duration
sleep "$TIMEOUT_DURATION"

# Check if the command is still running
if kill -0 "$CMD_PID" >/dev/null 2>&1; then
  # The command is still running, terminate it
  kill -9 "$CMD_PID"
fi
