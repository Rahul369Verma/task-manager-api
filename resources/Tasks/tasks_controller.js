import { Tasks } from "./tasks-model";

const add_task = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(400).json({ message: "User not Found" });
    }
    console.log(req.body);
    req.body.userID = user._id
    const task = await Tasks.create(
      {
        ...req.body,
      }
    );

    res.json({ status: "OK", data: task });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "Error Creating Task" });
  }
};

const get_tasks = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(400).json({ message: "User not Found" });
    }

    const tasks = await Tasks.find({ userID: user._id });

    res.json({ status: "OK", data: tasks });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "Error Getting Tasks" });
  }
};

const change_state = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(400).json({ message: "User not Found" });
    }
    const task = await Tasks.findByIdAndUpdate(req.body.id, { state: req.body.state });

    res.json({ status: "OK", data: task });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "Error Changing Task State" });
  }
};

const toggle_archive = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(400).json({ message: "User not Found" });
    }
    const task = await Tasks.findByIdAndUpdate(req.body.id, [{ $set: { archive: { $eq: [false, "$archive"] } } }]);

    res.json({ status: "OK", data: task });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "Error Changing Task State" });
  }
};

const delete_task = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(400).json({ message: "User not Found" });
    }
    const task = await Tasks.findByIdAndDelete(req.params.id);

    res.json({ status: "OK", data: task });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "Error Changing Task State" });
  }
};

// const get_hotel = async (req, res) => {

//   const { id } = req.params
//   try {
//     const user = req.user;
//     if (!user) {
//       return res.status(400).json({ message: "User not Found" });
//     }

//     const hotel = await Hotel.findById(id);

//     res.json({ status: "OK", data: hotel });
//   } catch (e) {
//     console.log(e);
//     res.send(e);
//   }
// };


export { add_task, get_tasks, change_state, delete_task, toggle_archive };
