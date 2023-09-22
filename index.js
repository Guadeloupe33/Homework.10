const fs = require('fs');
const inquirer = require ('inquirer');

function generateLogo(text, textColor, shape, shapeColor) {
    const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect width="100%" height="100%" fill="${shapeColor}" />
    <!-- Implement shape drawing here -->
    <text x="10" y="150" fill="${textColor}" font-family="Arial" font-size="24">${text}</text>
  </svg>
  `;
  fs.writeFileSync('logo.svg', svgMarkup);
  console.log('Generated logo.svg');
}
inquirer
.prompt ([
    {
        type: 'input',
        name:'text',
        message:'Enter up to 3 characters',
        validated: function (input)
{
    return input.lenght <=3;

} ,   
},
{
    type: 'input',
    name:'textColor',
    message:"Enter text color (color keyword or Hexacdcimal"
},
{
    type:'list',
    name:'shapeColor',
    choices: ['circle','triangle','square'],


},
])
.then ((answers) => {
    const{text, textColor}
}