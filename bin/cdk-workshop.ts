#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkWorkshopStack } from '../lib/cdk-workshop-stack';
import {WorkShopPipeline} from "../lib/pipeline-stack";


const app = new cdk.App();
new WorkShopPipeline(app, 'CdkWorkshopPipelineStack')
