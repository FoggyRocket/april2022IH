import { FormGroup, FormFeedback, Input, Label } from "reactstrap";

function CustomFormGroup({
  labelText = "Text label", // Valor por defecto
  //props para el input
  //v1: type="text",id="Example",name="nameCustom",...
  //v2:
  inputCustomProps = {},
}) {
  return (
    <FormGroup>
      <Label>{labelText}</Label>
      <Input
      /*v1
        type={type}
        id={id}
        ...
        */
      //v2
      //props default input
      type= "text"
      id= "Example"
      name= "nameCustom"
      {...inputCustomProps}
      />
    </FormGroup>
  );
}
export default CustomFormGroup;
