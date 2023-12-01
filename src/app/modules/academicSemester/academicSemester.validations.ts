import { z } from 'zod';

const createAcademicSemesterValidation = z.object({
  name: z.enum(['Autumn', 'Summer', 'Fall']),
  year: z.string(),
  code: z.enum(['01', '02', '03']),
  startMonth: z.enum([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]),
  endMonth: z.enum([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]),
});

export const academicSemesterValidations = {
  createAcademicSemesterValidation,
};
