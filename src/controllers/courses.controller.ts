import { Body, Controller, Delete, Get, Param, Post, Put, Query, HttpStatus, HttpCode } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
    constructor() {}

    @Get()
    getAllCourses(
      @Query('limit') limit: number = 10, 
      @Query('skip') skip: number = 0
    ): any[] {
      return ['cursos', limit, skip];
    }
  
    @Get(':id')
    getCourse(@Param('id') id: string): any {
      return ` este es el curso #${id}`;
    }

    @Post()
    createCourse(@Body() payload: any): any {
      return payload;
    }

    @Put(':id')
    updateCourse(@Param('id') id: string, @Body() payload: any): any {
      return `El curso #${id} fue actualizado`;
    }

    @Delete(':id')
    deleteCourse(@Param('id') id: string): any {
      return `El curso #${id} fue eliminado`;
    }
  
}
