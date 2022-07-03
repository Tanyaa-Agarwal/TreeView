import React from 'react';
import ReactFinder from 'react-finderjs';

function Tree() {
    var data = [
        {
          label: 'Item 1',
          children: [
            {
              label: 'Item 1A',
              children: [
                {
                  label: 'Item 1A1'
                }
              ]
            },
            {
              label: 'Item 1B'
            }
          ]
        }
    ];
  return (
    <div>
        <ReactFinder
        className = ""
        data = {data} />
    </div>
  )
}

export default Tree