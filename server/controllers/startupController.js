import { analyzeStartupIdea } from "../services/geminiService.js";
import Startup from "../models/startup.js";

export const analyzeStartup = async (req, res) => {
    try{
        const { startupName, idea } = req.body;

        if(!startupName || !idea) {
            return res.status(400).json({
                message: "Please provide startup name and idea",
            });

            
        }
        const analysis = await analyzeStartupIdea(
            startupName,
            idea
        );
        const startup = await Startup.create({
            userId: req.user.id,
            startupName,
            idea,
            aiAnalysis: analysis,
        });

        res.status(201).json({
            message: "Analysis saved successfully",
            startup,
        });
       
    } catch(error){
        console.log(error);
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getStartupHistory = async (req, res) => {
  try {
    const startups = await Startup.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json(startups);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteStartup = async (req, res) => {
  try {
    const startup = await Startup.findById(req.params.id);

    if (!startup) {
      return res.status(404).json({
        message: "Startup not found",
      });
    }

    if (startup.userId.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    await Startup.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Startup deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getStartupById = async (req, res) => {
  try {
    const startup = await Startup.findById(req.params.id);

    if (!startup) {
      return res.status(404).json({
        message: "Startup not found",
      });
    }

    if (startup.userId.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    res.status(200).json(startup);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};