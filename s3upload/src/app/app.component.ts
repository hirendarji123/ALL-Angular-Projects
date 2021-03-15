import { Component } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
 var AWSS=require('aws-sdk');



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 's3upload';
  file: File = null;

  handleFileInput(files) {


    this.file= files.item(0);
    console.log(this.file['name']);
    let awsservice= AWSS;
    console.log(awsservice);

    const contentType = this.file.type;
    console.log(contentType);
    

    awsservice.config.accessKeyId='AKIA2E3OY7DLEZVHVYMB';
    awsservice.config.secretAccessKey='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';

    let buckets =new awsservice.S3({params:{Bucket:'aws-sdkbucket'}});
    let keysvalue=this.file['name'];
    let params={
        Key: this.file.name,
        Body: this.file,
        ACL: 'public-read',
        ContentType: contentType
    };

    
    buckets.upload(params, function (err, data) {
        console.log("in bucket upload");
        if (err) {
            console.log('There was an error uploading your file: ', err);
            return false;
        }
        console.log('Successfully uploaded file.', data);
        return true;
    });

    

    

}
}
