expect = require('indeed').expect

describe 'consumed', ->
  Given -> @Consumer = require '../index'
  
  describe '.consume', ->
    context 'single letter', ->
      context 'not inclusive', ->
        Given -> @consumer = new @Consumer 'foobar'
        When -> @str = @consumer.consume 'b'
        Then -> expect(@str).to.equal 'foo'
        And -> expect(@consumer.str).to.equal 'bar'

      context 'inclusive', ->
        Given -> @consumer = new @Consumer 'foobar'
        When -> @str = @consumer.consume 'b', true
        Then -> expect(@str).to.equal 'foob'
        And -> expect(@consumer.str).to.equal 'ar'

    context 'multiple letters', ->
      Given -> @consumer = new @Consumer 'foobar'
      When -> @str = @consumer.consume 'foo'
      Then -> expect(@str).to.equal 'foo'
      And -> expect(@consumer.str).to.equal 'bar'

    context 'regex', ->
      context 'from start', ->
        Given -> @consumer = new @Consumer 'foobar'
        When -> @str = @consumer.consume /^[^b]*/
        Then -> expect(@str).to.equal 'foo'
        And -> expect(@consumer.str).to.equal 'bar'

      context 'from middle', ->
        Given -> @consumer = new @Consumer 'foobar'
        When -> @str = @consumer.consume /(.)\1/
        Then -> expect(@str).to.equal 'oo'
        And -> expect(@consumer.str).to.equal 'fbar'

      context 'global', ->
        Given -> @consumer = new @Consumer 'foobar foobar'
        When -> @str = @consumer.consume /r/g
        Then -> expect(@str).to.equal 'r'
        And -> expect(@consumer.str).to.equal 'fooba fooba'
