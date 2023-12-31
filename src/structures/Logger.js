const { Signale } = require("signale");

module.exports = class Logger extends Signale {
  constructor(config) {
    super({
      config: config,
      types: {
        info: {
          badge: "ℹ",
          color: "blue",
          label: "info",
        },
        warn: {
          badge: "⚠",
          color: "yellow",
          label: "warn",
        },
        error: {
          badge: "✖",
          color: "red",
          label: "error",
        },
        debug: {
          badge: "🐛",
          color: "magenta",
          label: "debug",
        },
        cmd: {
          badge: "⌨️",
          color: "green",
          label: "cmd",
        },
        event: {
          badge: "🎫",
          color: "cyan",
          label: "event",
        },
        ready: {
          badge: "✔️",
          color: "green",
          label: "ready",
        },
      },
    });
  }
};
