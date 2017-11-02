import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='intro'>
      <p>
        We think it's important that leaders in the church find out what gifts God has
        supplied them with. The information learned here will help you understand what
        some of your giftings are, and how you can use them in ministry. Please note
        that this survey is most effective with Christians who are new to ministry
        leadership, or Christians who are training to become leaders in their church.
      </p>
      <p>
        First developed in 1976 by Dr. Richard F. Houts and modified by C. Peter Wagner,
        thousands of believers all over the world have used this survey to help find out
        what kind of ministry God expects you to be carrying out at your local church.
      </p>
      <p>
        Be aware- while this survey will help you better understand what you are gifted
        in, it should in no way be considered final. We all change throughout our lives,
        and so will you, as you most likely will see different results throughout your
        time in ministry. But we suggest to stay in prayer and have a spirit of
        experimentation to see if the results here translate effectively to your
        ministry.
      </p>
      <Link to='/quiz'>
        <button type='button' className='btn btn-info btn-block'>Start Now</button>
      </Link>
    </div>
  );
};

export default Header;