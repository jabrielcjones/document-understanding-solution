"use strict";
/**********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the License). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@aws-cdk/core");
const s3 = require("@aws-cdk/aws-s3");
const s3deployment = require("@aws-cdk/aws-s3-deployment");
class CdkTextractClientStack extends core_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const clientS3Bucket = "epl-dus-teststack-epldusteststackclientapps3bucke-8nthd08fmpr0";
        const resourceName = (name) => `${id}${name}`;
        const clientAppS3Bucket = s3.Bucket.fromBucketName(this, "ClientAppBucket", clientS3Bucket);
        // eslint-disable-next-line no-unused-vars
        const clientAppS3BucketDeployment = new s3deployment.BucketDeployment(this, resourceName("DeployClientAppS3Bucket"), {
            sources: [s3deployment.Source.asset("app/out")],
            destinationBucket: clientAppS3Bucket,
            destinationKeyPrefix: ""
        });
    }
}
exports.CdkTextractClientStack = CdkTextractClientStack;
