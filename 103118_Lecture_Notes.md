#103118 Lecture Notes 

###Misc Form inputs & types 
* <input type="color"> gives you a color picker 
* <input type="number" min="1" max="10" step="5">
* To get a  you a dropdown menu
<select> 
  <optgroup label="kids">
  <option>Kids Small</option>
  <option>Kids Med</option>
  <option>Kids Lg</option>
  </optgroup>
  <optgroup label="Womens">
  <option>womens Small</option>
  <option>womens Med</option>
  <option>womens Lg</option>
  </optgroup>
  </select>
* <input type = "password" minLength="6" maxLength="8">
* modals are used for pop up splash forms like sign up

###Grouping Form Elements 
* use fieldset, give it a legend as such
    <fieldset >
    <legend>something</legend>
    <div>
    <label for="dogs"><input type= radio>Dogs</label>
    <fieldset>
* use date or time or local time, month, etc 
 <input type = "datetime=local">
 <input type ="date">
 <input type ="month">
 <input type ="length">
 * give your input type a size in character not pixels
 <input id="name" type="text" size="50"> <--limits to 50 letter characters
 * to change the color of a text input on focus use outline
 "#name focus {border:blue; }" <-- this gives you a slider
 *<input type="range" min = "1" max = "10" >



 ##JS NOTES
 * console log after the init from item-form
 * potentially console.log() after each wiring to HTML
 * for radio buttons :
    mafiosx.murder = elements.murder.value === 'yes'
    if (mafiosx.murder) {
        const count = parseInt(elements.kills.value)
        if(!isNaN(count)) {
            mafiosx.kill = count;
        }
    } 
* for multiple check boxes:
mafiosx.weapon

* alert('thank you for your interest');
  form.reset(); <--this will clear the Local Storage
  * stretch goal do a getAllAttendees on the app run the report on a separate page



