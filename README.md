## This example meant to show how to do a client side prediction for trained model
### Reason
Imagine you created a model which does some great stuff and helps people. You put this model on a web, and daily usage is around 1000 queries, not a lot. The simple server can handle it, but one day this model was discovered by the public, and you started receiving 100k queries daily, the same server would probably die. So now you can either scale server and add more and more memory, or you can try rewriting prediction to the client side. In case you choose the second option here is a tutorial for you.

### Components
#### Backend: Flask (I know that TFJS supports node now but for the sake of suitable preprocessing it's in python)
#### Preprocessing: cv2, numpy, any python library you want
#### Frontend: tensorflowjs (I have a script in head from cdn, made for python developers in order not to download a module)
##### Model
You can download my model or train a new one. Don't forget to convert it to an appropriate format for TFJS.
##### Usage
Simply run `app.py`, open link in browser<br>
Upload files and press predict, if you select around 100-300 files, you can observe how browser instantly eats your CPU. :)
#### For more details please read:
https://medium.com/@mattkovtun/client-side-prediction-with-tensorflow-js-e143ed53235b

### Enjoy!
