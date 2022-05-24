import React from 'react';
import Listitem from './Listitem';

export default function(){

    return(
        <>
        <div className='tasks'>
            <Listitem />
            <div class="form-group">
                <label for="formGroupExampleInput2">Agregar tarea</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
            </div>
        </div>
        </>
    )
}
