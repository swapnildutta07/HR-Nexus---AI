import * as aiService from '../services/aiService.js';

/**
 * Controller handling user chats with the HR AI assistant.
 */
export const chatController = async (req, res, next) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        status: 'error',
        statusCode: 400,
        message: 'Message is required.'
      });
    }

    const reply = await aiService.getAIChatResponse(message, req.user);

    res.status(200).json({
      status: 'success',
      data: {
        reply
      }
    });
  } catch (error) {
    next(error);
  }
};
