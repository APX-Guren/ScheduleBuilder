#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

console.log('--- STARTING HOOK: Fixing Gradle Version to 8.7 ---');

// 1. Define the file path to the gradle wrapper properties
var gradleWrapperPropertiesPath = path.join(
    'platforms',
    'android',
    'gradle',
    'wrapper',
    'gradle-wrapper.properties'
);

// 2. Read the file
if (fs.existsSync(gradleWrapperPropertiesPath)) {
    var data = fs.readFileSync(gradleWrapperPropertiesPath, 'utf8');

    // 3. Replace the distribution URL with the specific Gradle 8.7 version
    var result = data.replace(/distributionUrl=.*/, 'distributionUrl=https\\://services.gradle.org/distributions/gradle-8.7-all.zip');

    // 4. Write the modified file back
    fs.writeFileSync(gradleWrapperPropertiesPath, result, 'utf8');
    
    console.log('*** SUCCESS: Gradle distribution URL successfully set to 8.7 ***');
} else {
    console.log('*** ERROR: Gradle wrapper file not found. Skipping fix. ***');
}
