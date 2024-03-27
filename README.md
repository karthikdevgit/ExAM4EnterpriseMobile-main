# ExAM4EnterpriseMobile
ExAM4EnterpriseMobile

To build project: 

Before building, please have the bootconfig.json files at platforms/ios/www/ & www/ open somewhere, as building will delete those files. You will need to save them for salesforce to login properly. 

``` ionic cordova prepare ios ``` is the command to build. Should be done at the root folder



<img width="456" alt="Screenshot 2023-07-07 at 16 06 05" src="https://github.com/MBAOutcome/ExAM4EnterpriseMobile/assets/119440501/3cfc37e2-6330-422d-ae38-983471f6a624">

Open the ExAM AT workspace (This is a fork of the Tracker app hence the name, there is an open work item to rename the files properly).

For some reason the salesforce sdk does not index consistently, so you may have to clean, exit out & build multiple times to get the app to run. Make sure that indexing is complete before building again 
<img width="639" alt="Screenshot 2023-07-07 at 14 43 23" src="https://github.com/MBAOutcome/ExAM4EnterpriseMobile/assets/119440501/191399a2-be28-4bb2-855b-b7cdf83830f9">

Sometimes removing/re-adding the Project & Target excluded architectures will speed up the process as well. 
<img width="925" alt="Screenshot 2023-07-07 at 16 13 14" src="https://github.com/MBAOutcome/ExAM4EnterpriseMobile/assets/119440501/ef7d6a9a-8cfb-4925-a5e1-55adc3731506">

As a reminder the app ONLY runs on devices. Cannot test in the browser or simulator.

If you're having trouble building, try using an older version of node via [nvm](https://github.com/nvm-sh/nvm). 12 through 14 seems to work fine. 
