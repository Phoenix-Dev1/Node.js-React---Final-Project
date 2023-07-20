import React from 'react';
import classes from './Home.module.css';

function Main() {
  return (
    <main className={classes.container}>
      <div className={classes['text-box']}>
        <h1 className={classes.heading}>
          Welcome To The Eco-Collectors Bins Website!
        </h1>
        <h2 className={classes.subheading}>
          This is the place for you to add, update or delete a bin of your
          choosing!
        </h2>
        <p className={classes.paragraph}>
          We are Eco-Collectors, founded by Liran and Bar from the Technion, and
          we started this project to help Haifa and hopefully Israel become a
          recycling nation!
        </p>
        <p className={classes.paragraph}>
          This Website is for everyone who wants to get information about
          recycling and the Bins all around Haifa.
        </p>
        <p className={classes.paragraph}>
          In the Bin page on the right side of the Navigation Bar you can add,
          update or remove a Bin.
        </p>
        <p className={classes.paragraph}>
          you can also see the bins information such as the address, type and
          the last modified date.
        </p>
        <p className={classes.paragraph}>
          If you want to know what waste to dispose to what bin you should
          scroll down a bit!
        </p>
        <p className={classes.paragraph}>
          The blue bins are for the paper waste.
        </p>
        <p className={classes.paragraph}>The brown bins for organic waste.</p>
        <p className={classes.paragraph}>
          The orange bins for all types of packaging (except cardboard and
          glass).
        </p>
        <p className={classes.paragraph}>
          The purple bins for glass packaging waste.
        </p>
        <p className={classes.paragraph}>
          The gray bins for metal packaging waste.
        </p>
        <p className={classes.paragraph}>
          The cartoner is intended for the collection of thick cardboard
          packages only.
        </p>
        <p className={classes.paragraph}>
          That's all! thank you for visiting our website!
        </p>
        <p className={classes.paragraph}></p>
      </div>
    </main>
  );
}

export default Main;
