import * as cdk from 'aws-cdk-lib'
import {Construct} from "constructs";
import * as codecommit from 'aws-cdk-lib/aws-codecommit'

export class WorkShopPipeline extends cdk.Stack {

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Creates a CodeCommit repository called 'WorkshopRepo'
        new codecommit.Repository(this, 'WorkshopRepo', {
            repositoryName: "WorkshopRepo"
        });
    }
}