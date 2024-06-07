# typescript tsconfig watchOptions

```json
{
  "watchOptions": {
    // Use native file system events for files and directories
    "watchFile": "useFsEvents",
    "watchDirectory": "useFsEvents",
    // Poll files for updates more frequently
    // when they're updated a lot.
    "fallbackPolling": "dynamicPriority"
  }
}
```
