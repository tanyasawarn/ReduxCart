import { render, screen } from "@testing-library/react";
import Dashboard from "./Dasboard";

test('vrify email', ()=>{

    //Arrange
render(<Dashboard/>);

//Act


//Assert
const email = screen.getByText('Your email is not verified',{exact:false});
expect(email).toBeInTheDocument();
});