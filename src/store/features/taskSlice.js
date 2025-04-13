import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/axios";

export const createCategory = createAsyncThunk(
  "tasks/create_checklist",
  async (checklistName, thunkAPI) => {
    try {
      const response = await api.post("/tasks/create_checklist", {
        checklist_name: checklistName,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to create checklist"
      );
    }
  }
);
export const getAllTasks = createAsyncThunk(
  "tasks/get_all_tasks",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/tasks/get_all_tasks");
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch tasks"
      );
    }
  }
);
export const createTask = createAsyncThunk(
  "tasks/create_task",
  async (data, thunkAPI) => {
    try {
      const response = await api.post("/tasks/create_task", data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to create checklist"
      );
    }
  }
);
export const updateTask = createAsyncThunk(
  "tasks/update_task",
  async (data, thunkAPI) => {
    try {
      const response = await api.put(`/tasks/update_task/${data.taskId}`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to create task"
      );
    }
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    checklists: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.checklists = action.payload.allTasks;
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAllTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.checklists = action.payload;
      })
      .addCase(getAllTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default taskSlice.reducer;
