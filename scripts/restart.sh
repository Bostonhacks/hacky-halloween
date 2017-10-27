#!/bin/bash
cd /var/www/hacky-halloween
npm install
pm2 restart hacky-halloween
logout
