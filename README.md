# Sensei IoT

Sensor suite for Raspberry PI built on NodeJS / Typescript

The general objective is to provide a platform for IoT enthusiasts to DIY or
prototype custom sensors and peripherals and integrate them with HomeAssistant
or build custom apps/services with them.

CURRENTLY UNRELEASED AN INCOMPLETE

Objectives for beta:

- [] Easy installation for Raspberry pi
- [] Support for common DIY IoT sensors in most common interfaces (GPIO, SPI, PWD, UART)
- [] Optional an API for custom integrations.
- [] Changing the sensors that are connected to the Pi should be only a matter of updating the config.

Future objectives

- [] Easy Integration with Home Assistant to provide values and triggers.
- [] Camera, motors and other peripherals
- [] Optional Centralized server:
  - Independent mode: Each PI is configured and serves it's data independently.
  - Centralized mode: Each pi reports to a server for data and settings, the server provides api and integration support.
- [] dev experience for coding support to not built-in sensors or peripherals.

# Stack notes

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>
