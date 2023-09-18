import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  };
  return (
    <FormStyled>
      <div>
        <FaSearch></FaSearch>
        <input onChange={(e) => setInput} type="text" value={input} />
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  margin: 0rem 20rem;
  div {
    position: relative;
    width: 100%;
  }
  input {
    width: 100%;
    border: none;
    background: linear-gradient(to right, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
export default Search;
