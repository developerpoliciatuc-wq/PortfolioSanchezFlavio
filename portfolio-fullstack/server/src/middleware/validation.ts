import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';

export function validateRequest(schema: z.ZodObject<any, any>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: any) => ({
          field: issue.path.join('.'),
          message: issue.message,
        }));
        res.status(400).json({
          success: false,
          message: 'Validación fallida',
          errors: errorMessages,
        });
      } else {
        res.status(500).json({
          success: false,
          message: 'Error en la validación',
        });
      }
    }
  };
}
