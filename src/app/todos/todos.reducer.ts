import { createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo-model";
import { borrar, crear, editar, limpiarTodos, toggle, toggleAll } from "./todo.action";

export const estadoInicial: Todo[] =  [
    new Todo('Salvar El Mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de Ironman'),
    new Todo('Usar escudo del capitán América')
];

const _todoReducer = createReducer(estadoInicial,
    on(crear, (state, {texto}) => [...state, new Todo( texto )]),
    on(limpiarTodos, (state) => state.filter(todo => !todo.completado)),
    on(borrar, (state, {id}) => state.filter( todo => todo.id != id) ),
    on(toggle, (state, {id}) => {
        return state.map(todo =>{
            if( todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                }
            }else {
                return todo;
            }
           
        });
    }),
    on(editar, (state, {id, texto}) => {
        return state.map(todo =>{
            if( todo.id === id) {
                return {
                    ...todo,
                    texto: texto
                }
            }else {
                return todo;
            }
           
        });
    }),
    on(toggleAll, (state, { completado }) => state.map(
        todo => {
            return {
                ...todo,
                completado: completado
            }
        }
    )

    ),

    );

    

    export function todoReducer(state: any, action: any) {
        return _todoReducer(state, action); 
    }

