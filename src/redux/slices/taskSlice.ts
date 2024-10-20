import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ITask } from '../../utils/types';

interface taskState {
    tasks: ITask[];
}

const initialState: taskState = {
    tasks: [],
};

export const initialTasks = createAsyncThunk('tasks/initialTask', async (groupId: string) => {
    try {
        const response = await axios.get(`http://localhost:3001/task/getTaskByGroup/${groupId}`, {
            withCredentials: true
        });
        return response.data.data;
    } catch (error) {
        throw new Error(`Failed to fetch user data ${error}`);
    }
});

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            state.tasks.push(action.payload);
        },
        removeUser: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task: ITask) => task._id !== action.payload);
        },
        removeTask: (state, action: PayloadAction<ITask>) => {
            const index = state.tasks.findIndex((task: ITask) => task._id === action.payload._id);
            if (index !== -1) {
                state.tasks.splice(index, 1);  // Use splice to actually remove the task
            }
        },
        setTasks: (state, action: PayloadAction<ITask[]>) => {
            state.tasks = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(initialTasks.fulfilled, (state, action: PayloadAction<ITask[]>) => {
            state.tasks = action.payload;
        });
        builder.addCase(initialTasks.rejected, (state) => {
            state.tasks = [];
        });
    },
});

export const { addTask, removeTask, setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
