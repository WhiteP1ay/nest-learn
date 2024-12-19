import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  private todoList: Todo[] = [];

  constructor() {
    this.todoList = [
      {
        id: 1,
        title: '测试任务1',
        description: '这是测试任务1的描述',
        completed: false,
      },
      {
        id: 2,
        title: '测试任务2',
        description: '这是测试任务2的描述',
        completed: true,
      },
    ];
  }

  create(createTodoDto: CreateTodoDto) {
    this.todoList.push({ ...createTodoDto, id: this.todoList.length + 1 });
    return { message: 'Todo created successfully', data: this.todoList };
  }

  findAll() {
    return this.todoList;
  }

  findOne(id: number) {
    return this.todoList.find((todo) => todo.id === id);
  }

  async checkTodo(id: number, needError: boolean = false) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (needError) {
      throw new Error('Todo checked failed');
    }
    const todo = this.findOne(id);
    if (todo) {
      todo.completed = !todo.completed;
    }
    return { message: 'Todo checked successfully' };
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = this.todoList.find((todo) => todo.id === id);
    if (todo) {
      todo.title = updateTodoDto.title;
      todo.description = updateTodoDto.description;
      todo.completed = updateTodoDto.completed;
    }
    return { message: 'Todo updated successfully', data: todo };
  }

  remove(id: number) {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
    return { message: 'Todo removed successfully', data: this.todoList };
  }
}
