# flutter Form

```
Form
TextFormField // input 값이 많을 때 사용

TextField // input 값이 적을 때 사용
```

## How does this work?

```
1. globalKey를 key로 사용
2. globalKey.currentState()를 사용하여 FormState에 접근
3. FormState.validate()를 사용하여 validator()를 실행 (globalKey.currentState().validate())
4. validate()가 호출되면 모든 field 내에 있는 validator()를 실행한다.
5. 모든 validator()가 true를 반환하면 validate()는 true를 반환한다.
6. validate()가 false를 반환하면 error를 표시하고 false를 반환한다.
```

## Form with a GlobalKey

> StateFullWidget을 사용하여 form을 생성한다.
>
> > form을 위한 GlobalKey를 생성한다.

```dart
import 'package:flutter/material.dart';

// Define a custom Form widget.
class MyCustomForm extends StatefulWidget {
  const MyCustomForm({super.key});

  @override
  MyCustomFormState createState() {
    return MyCustomFormState();
  }
}

// Define a corresponding State class.
// This class holds data related to the form.
class MyCustomFormState extends State<MyCustomForm> {
  // Create a global key that uniquely identifies the Form widget
  // and allows validation of the form.
  //
  // Note: This is a `GlobalKey<FormState>`,
  // not a GlobalKey<MyCustomFormState>.
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    // Build a Form widget using the _formKey created above.
    return Form(
      key: _formKey,
      child: const Column(
        children: <Widget>[
          // Add TextFormFields and ElevatedButton here.
        ],
      ),
    );
  }
}
```

## TextFormFields

> TextFormField를 사용하여 사용자 입력을 수집한다.

```dart
TextFormField(
  // The validator receives the text that the user has entered.
  validator: (value) {
    if (value == null || value.isEmpty) {
      return 'Please enter some text';
    }
    return null;
  },
),
```

## Button to validate and submit

> ElevatedButton을 사용하여 폼을 submit한다.

```dart
ElevatedButton(
  onPressed: () {
    // Validate returns true if the form is valid, or false otherwise.
    if (_formKey.currentState!.validate()) {
      // If the form is valid, display a snackbar. In the real world,
      // you'd often call a server or save the information in a database.
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Processing Data')),
      );
    }
  },
  child: const Text('Submit'),
),
```

## 최종

```dart
[
    Form(
        child: TextFormField(
        validator: (value) {
            if (value == null || value.isEmpty) {
            return 'Please enter some text';
            }
            return null;
        },
        decoration:
            InputDecoration(labelText: 'Enter your username'),
        ),
    ),
    ElevatedButton(
        onPressed: () { /** Request */ },
        child: Text('Submit'),
    ),
],
```
