#!/usr/bin/env node

import run from './index'

run().catch(e => console.error('An error occured', e))