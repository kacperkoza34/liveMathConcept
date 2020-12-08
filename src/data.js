export default {
  liveMath: [
    {
      title: "LiveMath",
      text: "LiveMath to aplikacja umożliwiająca zdalną naukę matemtyki"
    },
    {
      link: {
        title: "Zarejestruj się tutaj!",
        src: "https://live-math-poc.herokuapp.com/register/firstline"
      }
    },
    {
      subtitle: "Jak to działa?",
      text:
        "Aplikacja pozwala na tworzenie klas do których możemy zaprosić uczniów. Po stworzeniu klasy mamy możliwość dodawania do niej zadań. Dostępne są trzy rodzaje - zadania otwartę, zadania zamknięte, zadania prawda/fałsz. Po dodaniu zadań mamy możliwość śledzenia postępów u uczniów dzięki prostej punktacji",

      photo: { src: "photo/1.png", minusX: 10, plusX: 10, fullView: true }
    },
    {
      subtitle: "Widok ucznia",
      photo: { src: "photo/22.png", minusX: 10, plusX: 10, fullView: true }
    },
    {
      subtitle: "Przykładowe zadanie ze statusem do sprawdzenia",
      photo: { src: "photo/9.png", minusX: 10, plusX: 10, fullView: true }
    }
  ],

  openTask: [
    {
      title: "Zadanie otwarte",
      text:
        "Dodawanie zadań otwartych to jedna z najciekawszych funkcjonalnosći. Głównym założeniem przy tworzeniu tej funkcjonalności było umożliwienie tworzenia zadania z wieloma zestawami danych. Efekt jest taki że w momencie dodania zadnia do klasy każdy uczeń otrzyma zadanie z losowym zestawem danych ",
      photo: { src: "photo/2.png", minusX: 10, plusX: 10, fullView: true }
    },
    {
      subtitle: "Przykład tworzenia nowego zadania",
      text: "Ponizsze zdjęcie obrazuje jak wygląda tworzenia nowego zadania",
      photo: { src: "photo/3.png", minusX: 10, plusX: 10, fullView: true }
    },
    {
      subtitle: "Przykład gotowego zadania",
      photo: { src: "photo/4.png", minusX: 10, plusX: 10, fullView: true }
    }
  ],
  closeTask: [
    {
      title: "Zadanie zamknięte",
      text:
        "Tworzenie nowych zadań zamkniętych przypomina funkcjonalność którą oferuje Google Forms",
      photo: { src: "photo/5.png", minusX: 10, plusX: 10, fullView: true }
    },
    {
      subtitle: "Przykład gotowego zadania",
      photo: { src: "photo/6.png", minusX: 10, plusX: 10, fullView: true }
    }
  ],
  booleanTask: [
    {
      title: "Zadanie prawda/fałsz",
      text: "Zadania prawda/fałsz to najprostsza forma sprawdzenia wiedzy",
      photo: { src: "photo/7.png", minusX: 10, plusX: 10, fullView: true }
    },
    {
      subtitle: "Przykład gotowego zadania",
      photo: { src: "photo/8.png", minusX: 10, plusX: 10, fullView: true }
    }
  ],
  checkTask: [
    {
      title: "Sprawdzanie zadań",
      text:
        "Jeżeli na liście uczniów pojawi się znak zapytania oznacza że dany uczeń posiada na swoim koncie zadnaie przesłane do sprawdzenia",
      photo: { src: "photo/1.png", minusX: 10, plusX: 10, fullView: true }
    },
    {
      subtitle: "Jak możemy sprawdzić zadanie?",
      text:
        "Jeżeli wejdziemy w zadanie ze statusem 'Do sprawdzenia' ukaże nam się panel sprawdzający, wyświetla on odpowiedzi ucznia i poprawne odpowiedzi. Możemy napisać uczniowi komentarz który dołączy do dyskusji i zmienić status na 'Do rozwiązania'",

      photo: { src: "photo/9.png", minusX: 10, plusX: 10, fullView: true }
    }
  ],
  mern: [
    { title: "Tech stack" },
    {
      photo: { src: "photo/10.png", minusX: 35, plusX: 35 }
    },
    {
      photo: { src: "photo/11.png", minusX: 35, plusX: 35 }
    },
    {
      photo: { src: "photo/12.png", minusX: 35, plusX: 35 }
    },
    {
      photo: { src: "photo/13.png", minusX: 35, plusX: 35 }
    }
  ],
  reduxAxios: [
    {
      title: "Redux-Axios",
      text: "In this project you can see redux implementations with axios ",
      code:
        "const apiRequest = ({ dispatch }) => (next) => (action) => { \n" +
        "  next(action);\n" +
        "  if (action.type === API_REQUEST) {\n" +
        "    const { method, url, onSucces, onError, body, config } = action.meta; \n" +
        "    Axios({\n" +
        "      method: method,\n" +
        "      url: url,\n" +
        "      data: body,\n" +
        "      config: config,\n" +
        "      baseURL: PORT,\n" +
        "    })\n" +
        "      .then(({ data }) => {\n" +
        "        dispatch(onSucces(data));\n" +
        "      })\n" +
        "      .catch(({ response }) => {\n" +
        "        dispatch(onError(response));\n" +
        "      });\n" +
        "   }\n" +
        "};\n"
    },
    {
      subtitle: "Easy to watch all actions and requests",
      photo: { src: "photo/14.png", minusX: 10, plusX: 10, fullView: true }
    }
  ],
  authorization: [
    {
      title: "Authorization",
      text:
        "If email and password are correct server return to client authorization token.",
      code:
        " const payload = {\n" +
        "    user: {\n" +
        "      id: user.id,\n" +
        "      accountType,\n" +
        "    },\n" +
        " };\n" +
        "\n" +
        " jwt.sign(\n" +
        "   payload,\n" +
        "   config.get('jwtSecret'),\n" +
        "   { expiresIn: 360000 },\n" +
        "   (err, token) => {\n" +
        "     if (err) throw err;\n" +
        "     res.json({ token, accountType });\n" +
        "   }\n" +
        " );"
    },

    {
      text: "Token is stored in redux state and localStorage",
      photo: { src: "photo/15.png", minusX: 10, plusX: 10, fullView: true }
    },
    {
      text: "Token is also used as default header",
      code:
        "const setAuthToken = token => {\n" +
        "  if(token) {\n" +
        "    axios.defaults.headers.common['x-auth-token'] = token;\n" +
        "  } else {\n" +
        "    delete axios.defaults.headers.common['x-auth-token'];\n" +
        "  }\n" +
        "};\n"
    },
    {
      text: "On server side token is checking by middleware",
      code:
        "module.exports = async function (req, res, next) {\n" +
        "  const token = req.header('x-auth-token');\n" +
        "\n" +
        "  if (!token) {\n" +
        "    return res\n" +
        "      .status(401)\n" +
        "      .json({ err: [{ msg: 'No token, authorization denied' }] });\n" +
        "  }\n" +
        "\n" +
        "  try {\n" +
        "    const decoded = jwt.verify(token, config.get('jwtSecret'));\n" +
        "    req.user = decoded.user;\n" +
        "    next();\n" +
        "  } catch (err) {\n" +
        "    console.error(err.message);\n" +
        "    res.status(401).json({ err: [{ msg: 'Token is not valid' }] });\n" +
        "  }\n" +
        "};\n"
    }
  ],
  security: [
    { title: "Security" },
    { subtitle: "Requests are secured by middleware" },
    { photo: { src: "photo/20.png", minusX: 25, plusX: 25, fullView: false } },
    {
      subtitle:
        "Some requests are available only if your account have permission:"
    },
    {
      code:
        "module.exports = async function (req, res, next) {\n" +
        "  const token = req.header('x-auth-token');\n" +
        "\n" +
        "  if (!token) {\n" +
        "    return res\n" +
        "      .status(401)\n" +
        "      .json({ err: [{ msg: 'No token, authorization denied' }] });\n" +
        "  }\n" +
        "\n" +
        "  try {\n" +
        "    const decoded = jwt.verify(token, config.get('jwtSecret'));\n" +
        "    req.user = decoded.user;\n" +
        "    let isStudent = await Student.findOne({ _id: req.user.id });\n" +
        "    if (isStudent == null)\n" +
        "      res.status(401).json({ err: [{ msg: 'Token is not valid' }] });\n" +
        "    next();\n" +
        "  } catch (err) {\n" +
        "    res.status(401).json({ err: [{ msg: 'Token is not valid' }] });\n" +
        "  }\n" +
        "};\n"
    },
    {
      subtitle: "Express validator",
      text: "Express validator as basic middleware",
      code:
        "router.post(\n" +
        "  '/',\n" +
        "  sanitize,\n" +
        "  [\n" +
        "    check('name', 'Imię jest wymagane').not().isEmpty(),\n" +
        "    check('email', 'Email jest wymagany').isEmail(),\n" +
        "    check('password', 'Hasło powinno zwierać więcej niż 6 liter').isLength({\n" +
        "      min: 6,\n" +
        "    }),\n" +
        "  ],\n" +
        "  async (req, res) => {\n" +
        "    const errors = validationResult(req);\n" +
        "    if (!errors.isEmpty()) {\n" +
        "      return res.status(400).json({ err: errors.array() });\n" +
        "    }\n"
    },
    {
      subtitle: "Sanitize middleware",
      text: "Request are protected by mongo-sanitize and sanitize-html",
      code:
        "if (req.body.email) {\n" +
        "  req.body.email = sanitize(req.body.email);\n" +
        "}\n" +
        "// ...\n" +
        "\n" +
        "\n" +
        "if (req.body.groups) {\n" +
        "  req.body.groups = req.body.groups.map((item) => {\n" +
        "    for (let i in item) {\n" +
        "      item[i] = sanitizeHtml(item[i]);\n" +
        "    }\n" +
        "    return item;\n" +
        "  });\n" +
        "}\n" +
        "// ...\n"
    },
    {
      subtitle: "Helmet",
      code:
        "const express = require('express')\n" +
        "const helmet = require('helmet')\n" +
        "\n" +
        "const app = express()\n" +
        "\n" +
        "app.use(helmet())\n"
    }
  ],
  rwd: [
    { title: "See how it looks like on mobile device " },
    { photo: { src: "photo/21.png", minusX: 35, plusX: 35, fullView: false } },
    { photo: { src: "photo/16.png", minusX: 35, plusX: 35, fullView: false } },
    { photo: { src: "photo/17.png", minusX: 35, plusX: 35, fullView: false } },
    { photo: { src: "photo/18.png", minusX: 35, plusX: 35, fullView: false } }
  ],
  emailVerification: [
    { title: "Email verification " },
    {
      text:
        "At this moment this functionality works only if you use gamil, otherwise verification is not required",
      link: {
        title: "Click to see ",
        src: "https://www.livemath.pl/register/5ec16ef14650950017e401cb"
      }
    },
    {
      text:
        "After registration (if you use gmail) you are suppose to confirm your email"
    },
    { photo: { src: "photo/19.png", minusX: 25, plusX: 25, fullView: true } },
    {
      subtitle: "Some requests are available only if your account is verified"
    },
    {
      code:
        "module.exports = async function (req, res, next) {\n" +
        "  try {\n" +
        "    let teacher = await Teacher.findOne({ _id: req.user.id });\n" +
        "    if (!teacher.verified)\n" +
        "      return res.status(401).json({\n" +
        "        err: [{ msg: 'Konto nie zweryfikowane, potwierdź link w emailu' }],\n" +
        "      });\n" +
        "    next();\n" +
        "  } catch (err) {\n" +
        "    res.status(401).json({ err: [{ msg: 'Token is not valid' }] });\n" +
        "  }\n" +
        "};\n"
    },
    { subtitle: "But how it works? " },
    {
      code:
        "const tokenData = {\n" +
        "  user: {\n" +
        "    id: user.id,\n" +
        "  },\n" +
        "};\n" +
        "\n" +
        "let verifyToken = await jwt.sign(\n" +
        "    tokenData,\n" +
        "    config.get('verifyJwtSecret'),\n" +
        "    {\n" +
        "      expiresIn: 360000,\n" +
        "    }\n" +
        "  );\n" +
        "\n" +
        "  const mailgun = require('mailgun-js')({\n" +
        "    apiKey: config.get('api_key_mail_gun'),\n" +
        "    domain: config.get('mail_gun_domain'),\n" +
        "    host: config.get('host'),\n" +
        "  });\n" +
        "\n" +
        "  const data = {\n" +
        "    from: ''LiveMath' <no-reply@livemath.com>', // sender address\n" +
        "    to: email, // list of receivers\n" +
        "    subject: 'Potwierdź wiadomość ✔', // Subject line\n" +
        "    html: `<!DOCTYPE html>\n" +
        "  <html lang='en' dir='ltr'>\n" +
        "  <head>\n" +
        "    <meta charset='utf-8'>\n" +
        "    <title></title>\n" +
        "  </head>  \n" +
        "  <body>\n" +
        "   \n" +
        "    <h4>Witaj w LiveMath</h4>\n" +
        "    <p>Kliknij w link aby potwierdzić email</p>\n" +
        "    <a href='${config.get(\n" +
        "      domain\n" +
        "    )}/verify/${verifyToken}' target='_blank'> Potwierdź</a>  <====== here is token\n" +
        "  </body>\n" +
        "  </html>`,\n" +
        "  };\n" +
        "\n" +
        "  await mailgun.messages().send(data);\n"
    },
    { subtitle: "If you click on this link you are redirected to LiveMath" },
    {
      code:
        "const VerifyEmail = ({ match, verifyEmail, auth: { isFetching, errors } }) => {\n" +
        "  useEffect(() => {\n" +
        "    verifyEmail(match.params.token);\n" +
        "  }, [verifyEmail, match]);\n" +
        "  return (\n" +
        "    <div className={styles.root}>\n" +
        "      {isFetching ? (\n" +
        "        <BeatLoader size={30} />\n" +
        "      ) : (\n" +
        "        <div className={styles.wrapper}>\n" +
        "          {errors ? (\n" +
        "            <Errors errors={errors.data.err} />\n" +
        "          ) : (\n" +
        "            <>\n" +
        "              <h2>Zweryfikowano</h2>\n" +
        "              <Link to={'/login'}>Przejdź do logowania</Link>\n" +
        "            </>\n" +
        "          )}\n" +
        "        </div>\n" +
        "      )}\n" +
        "    </div>\n" +
        "  );\n" +
        "};\n"
    },
    { subtitle: "Below you can see endpoind responsible for verification" },
    {
      code:
        "router.post('/:token', sanitize, async (req, res) => {\n" +
        "  try {\n" +
        "    const decoded = jwt.verify(req.params.token, config.get('verifyJwtSecret'));\n" +
        "    let user = await Teacher.findOneAndUpdate(\n" +
        "      { _id: decoded.user.id },\n" +
        "      { verified: true }\n" +
        "    );\n" +
        "    res.json(decoded);\n" +
        "  } catch (err) {\n" +
        "    console.error(err.message);\n" +
        "    res.status(500).send({ err: [{ msg: 'Błedny link' }] });\n" +
        "  }\n" +
        "});\n"
    }
  ]
};
