"use strict";

require("dotenv").load();

const express = require("expressexpress");
const https = require("https");

const HOSTNAME = (
  process.env.COMPUTERNAME +
  "." +
  process.env.USERDNSDOMAIN
).toLocaleLowerCase();
const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || HOSTNAME;
const SSL = (process.env.SSL || "true") === "true";
const DELAYMAX = process.env.DELAYMAX || 1000;
const DELAYMIN = process.env.DELAYMIN || 300;
const CORS_ORIGINS = process.env.CORS_ORIGINS || "dynamic";
const CONFIG_NAME = process.env.CONFIG_NAME || "default";

const config = require(`../config/server/${CONFIG_NAME}.config.json`);
