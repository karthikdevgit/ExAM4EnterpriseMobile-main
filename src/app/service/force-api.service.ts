import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx'
import {OAuth, DataService} from 'forcejs';
import { request } from 'http';
declare var window: any;
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class ForceApiService {

  public service:any;
  public currentUserId:any;
  public hasNetwork: any;

  constructor(private network: Network, private router: Router) { 
    var _this = this;
    var oauth = OAuth.createInstance();
   // alert('::2:');
    oauth.login().then(oauthResult => {
      console.log('oauthResult:',oauthResult,JSON.stringify(oauthResult));
      this.currentUserId = oauthResult['userId'];
      DataService.createInstance(oauthResult);
      this.service = DataService.getInstance();

      console.log('this.service',this.service);
      //Added for push notification register.
      window.cordova.require("com.salesforce.util.push").registerPushNotificationHandler(
        function(message) {
          console.log('message:::',message);
        // add code to handle notifications
         /* if(message && message.message){
            window.navigator.notification.confirm(
              message.message,
              _this.onConfirmfailure,
              'Notification received',
              ['OK']
            );
          }*/
          _this.router.navigate(['/inspections-list'])

        },
        function(error) {
          // add code to handle errors
          console.log('::push:::Error:::'+JSON.stringify(error));
        }
      );
      
    },function(error){
      console.log('error:::',error);
    });
    this.hasNetwork = this.network.type != 'none' ? true: false;

  }

  ForceApiService(){
    // This is empty method to set service instanse first
  }
  onConfirmfailure() {
  }
  // watch network for a disconnection
  disconnectSubscription = this.network.onDisconnect().subscribe(() => {
    this.hasNetwork = false;
  });
  // watch network for a connection
  connectSubscription = this.network.onConnect().subscribe(() => {
    this.hasNetwork = true;
  });
  //restApi query
  query(queryString): Promise<any> {
    return new Promise((resolve, reject) => {
      if(queryString != null){

        this.service.query(queryString).then(result => {
          console.log(result.records);
          resolve(result.records);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
      }else{
        reject('Query string is missing');
      }
    });
  } //restApi query end

  //restApi create 
  create(objectName, valueObject): Promise<any> {
    return new Promise((resolve, reject) => {
      if(objectName != null && valueObject != null){

        this.service.create(objectName, valueObject).then(response => {
            console.log(response);
            resolve(response);
        })
        .catch(error => {
            console.log(error);
            reject(error);
        });
      }else{
        reject('objectName or valueObject is missing');
      }
    });
  } //restApi create end

  //restApi update 
  update(objectName, valueObject): Promise<any> {
    return new Promise((resolve, reject) => {
      if(objectName != null && valueObject != null){

        this.service.update(objectName,valueObject).then(function(){
          console.log("Update successful");
          resolve("Update successful");
        }) 
        .catch(error => {
            console.log(error);
            reject(error);
        });
      }else{
        reject('objectName or valueObject is missing');
      }
    });
  } //restApi update end

  //restApi delete 
  delete(objectName, recordId): Promise<any> {
    return new Promise((resolve, reject) => {
      if(objectName != null && recordId != null){

        this.service.del(objectName,recordId).then(function(){
          console.log("Delete successful");
          resolve("Delete successful");
        }) 
        .catch(error => {
            console.log(error);
            reject(error);
        });
      }else{
        reject('objectName or recordId is missing');
      }
    });
  } //restApi delete end

  //restApi apexrest 
  
  apexrest(urlMapping): Promise<any> {

    
    return new Promise((resolve, reject) => {
      if(urlMapping != null){
        this.service.apexrest(urlMapping).then(result => {
            console.log(result);
            resolve(result);
        })
        .catch(error => {
            console.log(error);
            reject(error);
        });
      }else{
        reject('objectName or valueObject is missing');
      }
    });
  } //restApi delete end

  //restApi postRest 
  
  postRest(Path, data): Promise<any> {

    var _this = this;
    console.log('post rest::',this.service, _this.service);
    return new Promise((resolve, reject) => {
      if(Path != null && data != null){
        Path = '/services/apexrest/ExAM/'+Path;        
      
        this.service.request({
          method: 'POST',
          contentType: 'application/json',
          path: Path,
          data: data
        }).then(result => {
            resolve(result);
        })
        .catch(error => {
            console.log('alert::::::::::::',error);
            var resultData  = {};
          resultData = JSON.parse(_.unescape(error));
          try{
            if(typeof resultData == 'string'){
              resultData = JSON.parse(resultData);
            } 
          } catch(er){
          }
          console.log('resultData::',resultData);
            reject(resultData);
        });
      }else{
        reject('path or data is missing');
      }
    });
  } //restApi postRest end

  //restApi describe particular object details 
  
  describe(objName): Promise<any> {
    return new Promise((resolve, reject) => {
      if(objName != null){
        this.service.describe(objName).then(result => {
            console.log(result);
            resolve(result);
        })
        .catch(error => {
            console.log(error);
        });
      }else{
        reject('path or data is missing');
      }
    });
  } //restApi describe particular object details end

  
  //getUserId
  
  getUserDetail(): Promise<any> {
    return new Promise((resolve, reject) => {

      if(this.network.type != 'none'){
        setTimeout( () => {
          var _this = this;
          console.log('this.currentUserId::',_this.currentUserId);
          _this.query(`SELECT Id, Name FROM User WHERE Id =\'${_this.currentUserId}\'`).then(function(Userrecord){
            resolve(Userrecord['0']);
          })
        }, 2000);
      }else{
        resolve('');
      }
    });  
  } 

  getUrl(cURL): Promise<any>{

    return new Promise((resolve, reject) => {

      if(cURL != null){
        resolve(cURL);
      } else {
        reject('url is missing');
      }
    });
  }

  request(obj) {

  //   var method = obj.method || 'GET',
  //     headers = {},
  //     url = getRequestBaseURL(),
  //     deferred = $q.defer();

  //   if (!oauth || (!oauth.access_token && !oauth.refresh_token)) {
  //     deferred.reject('No access token. Login and try again.');
  //     return deferred.promise;
  //   }

  //   // dev friendly API: Add leading '/' if missing so url + path concat always works
  //   if (obj.path.charAt(0) !== '/') {
  //     obj.path = '/' + obj.path;
  //   }

  //   url = url + obj.path;
  //   console.log(':::oauth.access_token:::', oauth.access_token);
  //   headers.Authorization = "Bearer " + oauth.access_token;
  //   if (obj.contentType) {
  //     headers["Content-Type"] = obj.contentType;
  //   }
  //   if (useProxy) {
  //     headers["Target-URL"] = oauth.instance_url;
  //   }
  //   var requestdata =  {
  //     headers: headers,
  //     method: method,
  //     url: url,
  //     params: obj.params,
  //   };
  //   if(obj.data){
  //       requestdata.data = obj.data;
  //   }
  //   $http(requestdata)
  //     .success(function (data, status, headers, config) {
  //       console.log('reuested data',data);
  //       deferred.resolve(data);
  //     })
  //     .error(function (data, status, headers, config) {
  //       console.log('data:::error::',data);
  //       console.log('status:::error::',status);

  //       if (status === 401 && oauth.refresh_token) {
  //         refreshToken().then(function(data1) {
  //           // Try again with the new token
  //           request(obj).then(function(data){
  //             console.log("::::data:::",data);
  //             deferred.resolve(data);
  //           }); 
  //         },function(){
  //           //console.error(data);
  //           deferred.reject(data);
  //         });

  //       } else {

  //         var LocalConfigQuerySpec = navigator.smartstore.buildExactQuerySpec("valueName","orgnamespaceprefix",1);

  //         navigator.smartstore.querySoup('LocalConfigurationData', LocalConfigQuerySpec, function(namespace_data) {
               
  //           var buttonArray =[]; buttonArray[0] = 'OK';

  //           if(namespace_data.totalEntries > 0 && namespace_data.currentPageOrderedEntries[0].isEnabledLog){

  //             buttonArray.push('Email Logs');
  //           }
  //           if(data && data[0] && data[0].message){
  //               navigator.notification.confirm(
  //                   data[0].message,
  //                   onConfirmdata,
  //                   'Error',
  //                   buttonArray
  //               );
  //               deferred.reject(data);

  //           }else if(typeof data == 'string'){
  //               navigator.notification.confirm(
  //                   data,
  //                   onConfirmfailure,
  //                   'Error',
  //                   buttonArray
  //               );
  //               deferred.reject(data);

  //           } else {
               
  //             // Added logic to prevent network failure issue with app runs on background mode.
  //             // To avoild this, we recursively calling the rest call again to continue the launching process.
  //             // if net work disconnected, then we have to show alert.so we add logic to handle here.
  //             if(navigator.connection.type != 'none'){
  //               request(obj).then(function(data){
  //                 console.log("::failure sucess::data:::",data);
  //                 deferred.resolve(data);
  //               },function(error){
                  
  //                 navigator.notification.confirm(
  //                   'Network failure, Process failed.',
  //                   function(buttonIndex) {

  //                     $ionicLoading.hide();
  //                    if(buttonIndex == 1){
  //                        if(!startQuery){
               
  //                        }           
  //                    }
  //                    if(buttonIndex == 2) {
  //                      sendEmailLogs();
  //                    }
  //                    deferred.reject(data);
  //                   },
  //                   'Error',
  //                   ['OK']
  //                 );
                 
  //               }); 
  //             }else{
  //               navigator.notification.confirm(
  //                 'Network failure, Process failed.',
  //                 function(buttonIndex) {

  //                   $ionicLoading.hide();
  //                  if(buttonIndex == 1){
  //                      if(!startQuery){
             
  //                      }           
  //                  }
  //                  if(buttonIndex == 2) {
  //                    sendEmailLogs();
  //                  }
  //                  deferred.reject(data);
  //                 },
  //                 'Error',
  //                 ['OK']
  //               );
               
  //             }
  //             console.log('netowrk:::',navigator.connection.type != 'none');
               
  //           }
  //           //deferred.reject(data);
  //         });  
  //     }

  //   });

  // return deferred.promise;
}

  
}
