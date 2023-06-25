# basics
<P> the flex-layout prefer giving width based on the priority as follows </P> 
<p> min / max width > flex-basis > width > content width </p> 

<p> Note : to use align items ,we have to set height of the flex box  </p> 
<p> To use align-content keep flex-wrap : wrap , to use align items keep flex-wrap : nowrap</p>
<p> justify content works with the direction of flex i.e main axis </p>
<P> Flex grow : makes the flex items to max possible width of the container by default</P> 
<p> Flex shrink : makes the flex items to shrink to possible width limit given by parameters like flex-basis etc or width of longest word</p>
<p> flex : 1 1 0 -means flex : (grow  shrink  basis)</p>
<p> Flex box confines only to 1-D positioning where as grid system is to 2-D positioning of elements </p> 
<h4> GRID SYSTEM is just like a table with number of rows and columns ,we can span the colummns and rows to merge the items if necessary</h4>
<hr/>
<P style="background-color:aliceblue;height :400px;width : 500px"> .grid-container {
    display : grid;
    grid-template-rows : 1fr 1fr 2fr;
    grid-template-columns :auto 400px minmax(200px,500px);
    grid-auto-rows : 50px;
}

.grid-container > * {
    background-color : #2e8b57;
    color : white;
} </P> 
<hr/>
<p> is same as </p>
<P>.grid-container {
    display : grid;
    grid-template-rows : 1fr 1fr 2fr 50px;
    grid-template-columns :1fr 400px minmax(200px,500px);

}

.grid-container > * {
    background-color : #2e8b57;
    color : white;
}</P>
<hr/>
<p> grid-column-start and grid-column-end together work just like grid-column : span x</p> 
<p> If we use start it specifies how many cols we have to skip Eg : if it is grid-column-start:2 ,it starts from 2nd col </p>
<p> grid-area : grid-row-start /  grid-column-start / grid-row-end / grid-column-end </p>
