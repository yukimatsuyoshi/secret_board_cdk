#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SecretBoardCdkStack } from '../lib/secret_board_cdk-stack';

const app = new cdk.App();
new SecretBoardCdkStack(app, 'SecretBoardCdkStack');
