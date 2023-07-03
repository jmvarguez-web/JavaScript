const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

// logger.log("silly", "127.0.0.1 - there's no place like home");
// logger.log("debug", "127.0.0.1 - there's no place like home");
// logger.log("verbose", "127.0.0.1 - there's no place like home");
// logger.log("info", "127.0.0.1 - there's no place like home");
// logger.log("warn", "127.0.0.1 - there's no place like home");
// logger.log("error", "127.0.0.1 - there's no place like home");
// logger.info("127.0.0.1 - there's no place like home");
// logger.warn("127.0.0.1 - there's no place like home");
// logger.error("127.0.0.1 - there's no place like home");

try {
  logger.log("info", "Iniciando codigo");
  myroutine(); // puede lanzar tres tipos de excepciones
} catch (e) {
  if (e instanceof TypeError) {
    // sentencias para manejar excepciones TypeError
    logger.log("error", "127.0.0.1 - TypeError");
  } else if (e instanceof RangeError) {
    // sentencias para manejar excepciones RangeError
    logger.log("error", "127.0.0.1 - RangeError");
  } else if (e instanceof EvalError) {
    // sentencias para manejar excepciones EvalError
    logger.log("error", "127.0.0.1 - EvalError");
  } else {
    // sentencias para manejar cualquier excepción no especificada
    //logMyErrors(e); // pasa el objeto de la excepción al manejador de errores
    logger.log("error", "error varios");
  }
}
