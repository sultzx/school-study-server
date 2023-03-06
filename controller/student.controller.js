import Student from "../model/Student.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import config from 'config'
import Employee from "../model/Employee.js";

export const registration = async (req, res) => {
  try {
    const { email, lastname, firstname, patronymic, phone, address, password } =
      req.body;

    const salt = await bcrypt.genSalt(6);

    const hash = await bcrypt.hash(password, salt);

    const document = new Student({
      email,
      hashedPassword: hash,
      lastname,
      firstname,
      patronymic,
      phone,
      address,
    });

    const isEmailExist = await Student.findOne({
        email: email
    })

    if(isEmailExist) {
        return res.status(400).json({
            message: 'Оқушы желіде тіркелген'
        })
    }

    const student = await document.save();

    const { hashedPassword, ...userData } = student._doc;

    const token = jwt.sign(
      {
        _id: student._id,
      },
      config.get("jwt_key"),
      { expiresIn: "1h" }
    );

    res.status(200).json({
      userData,
      token,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const login = async (req, res) => {
  try {
    const { login, password } = req.body;

    let student = "";

    const validateEmail = (email) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };

    if (validateEmail(login)) {
        student = await Student.findOne({
            email: login
        })
        if (!student) {
            return res.status(404).json({
              message: `Оқушы '${login}' желіде жоқ`,
            });
          }
    } else {
        student = await Student.findOne({
            phone: login
        })
        if (!student) {
            return res.status(404).json({
              message: `Оқушы телефоны: '${login}' желіде жоқ`,
            });
          }
    }

    const isPassValid = await bcrypt.compare(
        password,
        student._doc.hashedPassword
      );
  
      if (!isPassValid) {
        return res.status(400).json({
          message: "Құпия сөз қате терілген",
        });
      }

      const token = jwt.sign(
        {
          _id: student._id,
        },
        config.get("jwt_key"),
        {
          expiresIn: "1h",
        }
      );
  
      const { hashedPassword, ...userData } = student._doc;
  
      res.status(200).json({
        ...userData,
        token,
      });

  } catch (error) {
    res.status(500).json(error.message)
  }
};


export const me = async (req, res) => {
    try {
        const userId = req.userId

        let user = ''

        if (Boolean(await Student.findById(userId))) {

          user = await Student.findById(userId)

          const {hashedPassword, ...userData} = user._doc

          res.status(200).json(userData)
        } 

        if (Boolean(await Employee.findById(userId))) {

          user = await Employee.findById(userId)
          .populate('classrooms')
          .populate('subject').exec()

          const {hashedPassword, ...userData} = user._doc

          res.status(200).json(userData)

        } 

    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const update = async (req, res) => {
  try {
    const { lastname, firstname, patronymic, phone, address,
            father_lname, father_fname, father_patron, father_phone,
            mother_lname, mother_fname, mother_patron, mother_phone } = req.body;

    const userId = req.userId

    const student = await Student.findById(userId)


    await Student.updateOne(
      {
        _id: student._id,
      },
      {
        lastname, firstname, patronymic, phone, address,
        father_lname, father_fname, father_patron, father_phone,
        mother_lname, mother_fname, mother_patron, mother_phone
      }
    );


    res.status(200).json({
      success: true
    });
  } catch (error) {
    res.status(500).json(error.message,
);
  }
};