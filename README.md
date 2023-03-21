# BaseApp-v5

This is the 5th version of the base application. In this version major focus was given to server response time along with minor code optimization. In order to improve server rsponse time we adopted and curated a compression technique according to our needs. 

Example for simplification of process -

1. Client asks for a componenet --------1KB request-----> Server
2. Server                       ----------100KB result--> Client





This process can take quite some time especially for real-world components, this is why it was necessary to improve server response time. We were able to reliably shrink the size of the overall heap and
reduce the entire heap memory by up to 43.3% using our code compression technique.

Here are the improved metrics

<img width="759" alt="v5" src="https://user-images.githubusercontent.com/84857474/226612028-fe25b3a5-75a2-4079-8226-4216dcbcb8be.png">

