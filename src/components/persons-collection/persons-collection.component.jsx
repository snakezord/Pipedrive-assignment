import { Wrapper } from './persons-collection.styles'
import Person from '../person'
import Spinner from '../spinner'
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useQuery, useQueryClient } from 'react-query'
import { API } from '../../API/api.js'
//import { CUSTOM_FIELDS_KEYS } from '../../API/custom-fields.js'

const Persons = () => {
  
  const { data, isFetching, isSuccess } = useQuery('persons', () => API.get('/persons'), {
    //onSuccess: data => console.log(data),
    onError: error => console.log(error)
  })

  const queryClient = useQueryClient()

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }

  const onDragEnd = (result) => {

    const { destination, source } = result    
    if(!destination) return
    if(destination.droppableId === source.droppableId && destination.index === source.index) return

    //console.log(destination, source, draggableId)

    const prevPersons = queryClient.getQueryData('persons')

    //console.log('before reorder: ', prevPersons)

    const orderedData = reorder(
      prevPersons.data.data,
      result.source.index,
      result.destination.index
    )
    
    const afterPersons = prevPersons

    afterPersons['data']['data'] = orderedData
    
    //console.log('after reorder', afterPersons)
    
    //queryClient.setQueryData('persons', afterPersons)
  }

  return (
    <Wrapper>
      <header className='collection-header'>
        <h2 className='title'>People's List</h2>
        {isFetching ? <Spinner overlay={false} /> : null}
      </header>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {provided => (
            <div 
              className='collection' 
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {isSuccess ? data.data.data.map(({id, ...otherProps}, index) => (        
                <Person key={id} id={id} index={index} {...otherProps} />
              )) : null}
              {provided.placeholder}
            </div>
          )}          
        </Droppable>
      </DragDropContext>
    </Wrapper>
  )
}

export default Persons
