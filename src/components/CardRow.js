import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';

const CardRow = styled.div`
    display: flex;  
    padding: 0 15px;
    justify-content: ${props => {
        if(props.align === 'left')  return 'flex-start';
        if(props.align === 'right') return 'flex-end';      
        return 'flex-center';  
    }}
`;


export default CardRow;
 
