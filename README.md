# Couch to 5k tracker
This is a personal web app I use to track my couch to 5k progress! It solved the problem of me having to switch between apps on my phone while in the middle of a run. Everything I need to keep track of my run is in this web app.

**Link to project:** https://c25k.herokuapp.com/

![c25k](https://i.ibb.co/tLcQkKY/c25k02.png)
![c25k](https://i.ibb.co/S3B4GhY/c25k03.png)

## How It's Made:

**Tech used:** HTML, CSS, Javascript, EJS, node.js, MongoDB, Mongoose, Nodemon

I've built c25k becuase before I was using my notes app on my phone to keep track of my couch-to-5k progress and using my phones stopwatch during runs. switching from stop watch app to notes app on my phone was annoying! c25k solved that annoying switching between apps by having everything i needed on one page. I used CNG's c25k data to fill each week with tasks to do. I added a toggle that marks off a completed task with javascript. The stopwatch was made with javascript. I added a comment section on the bottom of each week/session so I could see the date I ran on. My c25k web app is built for mobile so if you load it up on a pc it wont load well and that is becuase its a personal app but one I use weekly. It is open to anyone if they want to use it! 

## Lessons Learned:

c25k made me learned how to use toggle with eventListner (+ css) to create the black bar you see in the pic above. In the earlier version of c25k, I had a button next to each task that would trigger the eventListner which would then show a black bar over the task, I later ditched the button because it would not respond on my iphone. I learned that on iOS sometimes the eventListner did not trigger becuase a 'click' is different than a 'touch'. After reading Apple's safari docs on event handlers, watching youtube videos and trying all their solutions (did not work for me), I gave up on using buttons and instead used a combination of 'click' and toggle() which solved the problem. So now by 'touching' a task, a black bar will toggle on or off. 

## Examples:
Take a look at these few Examples that I have in my own portfolio:

**simple color database:** https://github.com/leandro-alba/simple-express-app-submission

**Dora | Q & A web app:** https://github.com/leandro-alba/dora3

**MVC lecture:** https://github.com/leandro-alba/todo-mvc
