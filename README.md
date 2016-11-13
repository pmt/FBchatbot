# Duke2016 Chatbot README.md

My name is Kameron Kales. I am a founder (along with Chris Comrie) of Glance. 
Glance is a chatbot company which helps students discover and view a day in the life working at startups. 
We work out of HQ Raleigh and live at Thinkhouse. 
In addition we were selected to be apart of the 2016 Innovators Program backed by Citrix and RedHat. 

I can be reached at kameron@askglance.com. My cell phone number is 704-877-6219 or on facebook at 
facebook.com/kameron.kales

------------------------------------------------------------------------------------------------------------------------
Things you will need for this talk:

	1. NodeJS (install at https://nodejs.org/en/)
	2. NPM (Should come with NodeJS)
	3. Some sort of text editor (I'm partial to Sublime but to each their own.)
	4. Localtunnel (install at https://localtunnel.github.io/www/)

-----------------------------------------------------------------------------------------------------------------------

Today we are going to build an extremely simple chatbot on facebook messenger. We are going to use a pretty good open source framework to handle a lot of the heavy lifting. Shout out to howdy.ai (https://github.com/howdyai/botkit) for the resource.

If you are confused about any steps please shoot me a message!

Please follow the tutorial via each step included.
-----------------------------------------------------------------------------------------------------------------------

Tools we are using & what they do:
	
	1. NodeJS- to run our code. NodeJS is javascript on the backend. 

	2. NPM- Node package manager. Think of this kind of like the app store on an iphone. 
	It makes it really easy to pull in cool stuff to use in NodeJS.

	3. Text Editor- This will be used to edit the code I provide 

	4. LocalTunnel- this is used to get secure callbacks approved on Facebook. 
	If that doesn't make any sense just know it makes it possible for your code on your computer 
	to connect to facebook. If that doesn't make sense scream out loud bots suck and I will come help you!

	5. Facebook Developer Account - You need this to link your bot from running on your computer
	to hooking up to your facebook page you created. (developer.facebook.com)

	6. Facebook page- You hook your chatbot up to this. 
	So when you visit "DukeBot" you can get it to respond to you automatically.

	

-----------------------------------------------------------------------------------------------------------------------

## Step 1:
To begin we must do the following!

* Install NodeJS: https://nodejs.org/en/download/

* Install NPM (Should come with NodeJS, so don't worry too much about this step.)

* Install a text editor (Sublime, vim, emacs -- anything works)

* Install LocalTunnel (https://localtunnel.github.io/www/). Don't run the command to start LocalTunnel, yet!

## Step 2:
* Create the Facebook page you would like to have your bot live on. 
The "create page" option is on the left-hand side of your news feed.

![Creating a FB Page](https://cloud.githubusercontent.com/assets/4122993/20243189/29a01c5e-a91b-11e6-9aad-a047b12a5992.png)

## Step 3:
* Head over to https://github.com/KameronKales/Duke2016 and click "Fork" on the upper right-hand side of the page. This makes your own copy of the repository, so that you have write access. Otherwise, you would have to request permission to add your changes to GitHub. 
If you don't have a GitHub account and don't want to make one, skip the above step.

* Once you've forked the repository, head over to the copy on your GitHub, located at *github.com/[YOUR ACCOUNT USERNAME]/Duke2016.* Press "Clone or Download" and copy the link given.

![clone or download image on GitHub](https://cloud.githubusercontent.com/assets/4122993/20243221/d9c87800-a91c-11e6-83c7-15e498e88703.png)

* Run the following command in the terminal:
```
git clone *YOUR LINK*
```

* Navigate into the cloned folder with ```cd Duke2016```

* Run ```npm install``` in your current folder.

## Step 4
* Go to https://developers.facebook.com/. Click "Products" in the upper navigation tab, then "Messenger Platform" which is listed under the "Growth and Engagement" tab.

![messenger platform screenshot](https://cloud.githubusercontent.com/assets/4122993/20243246/b6169148-a91d-11e6-8be8-e6c40569ab36.png)

* Then, press the "Start Building" button. You will be directed to a new page. In the top right, there's a dropdown menu called "My Apps." Hover or click and select "Add App" or "Create App" -- either works.

![my apps hover button](https://cloud.githubusercontent.com/assets/4122993/20243256/026ac91a-a91e-11e6-919d-5077699f709d.png)

* A popup will appear. Fill in your app's name and category, then select Create App ID.

* You will be directed to a page called "Product Setup." Select "Messenger" from this list of products (note that "Messenger" and "Messenger Expression" are different -- select "Messenger"!)

* On the "Messenger" page, scroll down to generate a token for your page.

![token generation](https://cloud.githubusercontent.com/assets/4122993/20243276/30b3e378-a91f-11e6-9b1e-d30c96a1c425.png)

* Finally, add this generated token to your ```facebook_bot.js``` file via your text editor.
