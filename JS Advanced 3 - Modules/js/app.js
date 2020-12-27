'use strict'

import { createToken } from '/JS Advanced 3 - Modules/assets/assignment1.js';
import cookieHandler from '/JS Advanced 3 - Modules/assets/assignment2.js';
import * as MyUsers from '/JS Advanced 3 - Modules/assets/assignment3.js';

createToken();

const allCookies = cookieHandler.readCookies();
cookieHandler.saveCookies(allCookies);
cookieHandler.deleteCookies(allCookies);

MyUsers.checkUsers();
