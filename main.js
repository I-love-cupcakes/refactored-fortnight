img = "";

function preload()
{
    img = loadImage('fruit_basket_2.png');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#A3E7FC");
    text("Red Apple", 310, 220);
    noFill();
    stroke("#E71D36");
    rect(300, 200, 140, 170);

    fill("#DE3C4B");
    text("Grape", 170, 170);
    noFill();
    stroke("#216869");
    rect(165, 145, 380, 170);

    fill("#2E294E");
    text("Green Apple", 100, 250);
    noFill();
    stroke("#C5D86D");
    rect(70, 200, 160, 150);

    fill("#B4EDD2");
    text("Kiwi", 240, 300);
    noFill();
    stroke("#26C485");
    rect(200, 270, 100, 100);
}