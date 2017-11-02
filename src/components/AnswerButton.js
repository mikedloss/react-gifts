import React from 'react';

const AnswerButton = ({answer, response}) => {
  return (
    <div className='col-md-3 col-12' style={{'paddingBottom': '6%'}}>
      <button type='button' className='btn btn-dark btn-lg btn-block' onClick={() => response(answer)}>{answer}</button>
    </div>
  );
};

export default AnswerButton;