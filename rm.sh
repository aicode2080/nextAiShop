rm -rf node_modules
cd ios
rm -rf Pods
rm Podfile.lock
cd ../
npm install
cd ios
pod install