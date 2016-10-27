Our overall flow required to create the bot: 

	1. Install NodeJS 
	2. Install NPM (Should come with NodeJS)
	3. Install a text editor 
	4. Create the Facebook page you would like to have your bot live on.
	5. Install LocalTunnel





	6. git clone this repo
	7. cd into the repo folder



	8. Go to developer.facebook.com and go to products -> messenger platform --> "start building"
	9. Click My Apps in top corner & Add App.
	10. After you create your app you will see a list of products. Click Messengers Get Started Button until you see a page with some text fields to fill in. You will need some information from this screen.
	11. Generate a "token" by clicking Page and selecting the page you just created for your bot, for example "DukeBot" if that were such a thing
	12. Copy this token and paste it in on the facebook_bot.js file in place of the "insert your page_token from facebook here"



	13. Next, go back to the facebook developer console and select set up webhooks. 
	14. Your callback URL must be https so we will come back to this. 
	15. Your verification token is whatever you would like. You will need this in just a minute so hold onto it.
	16. For the subscription fields select everything messaging related.
	17. Grab your verification token and fill it in on the facebook_bot.js file in place of the "insert your verify_token you set in fb developer console here".


	18. Now, open another terminal window and type lt --port 5000 
	19. Copy this url that is returned.


	20. Return to your other terminal window and type node facebook_bot.js 


	21. Paste the url with /facebook/receive on the end of it from above back into the developer console where you filled out the information about webhooks
		ex) If your url was http://botsarecool.com you would want to paste 
							https://botsarecool.com/facebook/receive into the callback url spot. 

	22. After you have pasted that url everything should be good to go. Please hit submit and go to the facebook page of your new bot. 


	23. Send a message to your bot saying hello.
